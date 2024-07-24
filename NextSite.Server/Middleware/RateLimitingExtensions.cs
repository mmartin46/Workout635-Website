using Microsoft.AspNetCore.RateLimiting;
using Microsoft.Extensions.Primitives;
using MongoDB.Bson.IO;
using Newtonsoft.Json;
using System.Threading.RateLimiting;

namespace Site.Server.Middleware
{
    public static class RateLimitingExtensions
    {
        public static IServiceCollection AddCustomRateLimiter(this IServiceCollection services)
        {
            services.AddRateLimiter(options =>
            {
                ConfigureCustomRateLimiter("contact", ref options, permitLimit: 15);
                ConfigureCustomRateLimiter("location", ref options, permitLimit: 15);
            });

            return services;
        }

        private static void ConfigureCustomRateLimiter(string policyName, ref RateLimiterOptions options, string windowLimiter = "fixed", int permitLimit = 10)
        {
            options.OnRejected = async (context, _) =>
            {
                if (context.Lease.TryGetMetadata(MetadataName.RetryAfter, out var retryAfter))
                {
                    context.HttpContext.Response.Headers.RetryAfter = new StringValues(
                            ((int)retryAfter.TotalSeconds).ToString()
                    );
                }

                context.HttpContext.Response.StatusCode = StatusCodes.Status429TooManyRequests;
                context.HttpContext.Response.ContentType = "application/json";
                var result = new { message = "Too many requests. Please try again later." };
                await context.HttpContext.Response.WriteAsync(Newtonsoft.Json.JsonConvert.SerializeObject(result));
            };

            switch (windowLimiter)
            {
                case "fixed":
                    {
                        options.AddFixedWindowLimiter(policyName: policyName, fixedOptions =>
                        {
                            fixedOptions.AutoReplenishment = true;
                            fixedOptions.PermitLimit = permitLimit;
                            fixedOptions.Window = TimeSpan.FromMinutes(1);
                        });
                        break;
                    }
                case "sliding":
                    {
                        options.AddSlidingWindowLimiter(policyName: policyName, fixedOptions =>
                        {
                            fixedOptions.AutoReplenishment = true;
                            fixedOptions.PermitLimit = permitLimit;
                            fixedOptions.Window = TimeSpan.FromMinutes(1);
                        });
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
        }

        public static IApplicationBuilder UseCustomRateLimiter(this IApplicationBuilder app)
        {
            app.UseRateLimiter();
            return app;
        }
    }
}