using NextSite.Server.Models;
using NextSite.Server.Services;
using Portfolio.Services;
using Site.Server.Middleware;
using Microsoft.Extensions.Logging;
using NextSite.Server.Repositories;
using NextSite.Server.Middleware;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using NextSite.Server;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddLogging(builder => builder
                                        .AddFilter("Microsoft", LogLevel.Warning)
                                        .AddFilter("System", LogLevel.Warning)
                                        .AddConsole());
builder.Services.AddControllers();
builder.Services.AddCustomRateLimiter();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddLogging(builder => builder.AddConsole());


builder.Services.AddControllers()
.AddJsonOptions(options =>
{
    // This will use the property names as defined in the C# model
    options.JsonSerializerOptions.PropertyNamingPolicy = null;
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Constants.Key))
        };
    });


builder.Services.AddTransient<IEmailService, EmailService>();

builder.Services.AddGeneralService<EmploymentModel>("employment");
builder.Services.AddGeneralService<LocationModel>("locations");
builder.Services.AddGeneralService<TrainerModel>("personal_trainers");
builder.Services.AddGeneralService<TimelineModel>("timeline");
builder.Services.AddGeneralService<EmployeeModel>("employees");

builder.Services.AddSingleton<IService<AccountModel>>(service => new AccountService<AccountModel>("accounts"));
builder.Services.AddSingleton<IService<MembershipModel>, MembershipService>();
builder.Services.AddSingleton<IBodyService<BodyModel>>(service => new BodyService<BodyModel>("services"));
builder.Services.AddSingleton<IService<ContactModel>, ContactService>();
builder.Services.AddSingleton<IJwtService, JwtService>();


builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
    policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Invokes authentication schemes configured in AddAuthentication
app.UseAuthentication();
// Checks user's identity
app.UseAuthorization();

app.MapControllers();

app.UseCustomRateLimiter();
app.UseCors(builder => builder
    .AllowAnyHeader()
    .AllowAnyMethod()
    .SetIsOriginAllowed(origin => true)
    .AllowCredentials()
);


app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
);
app.MapFallbackToFile("/index.html");

app.Run();
