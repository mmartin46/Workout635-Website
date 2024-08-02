using NextSite.Server.Models;
using NextSite.Server.Services;
using Portfolio.Services;
using Site.Server.Middleware;
using Microsoft.Extensions.Logging;
using NextSite.Server.Repositories;
using NextSite.Server.Middleware;
using AutoMapper;


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


builder.Services.AddControllers();

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

app.UseAuthorization();

app.MapControllers();

app.UseCustomRateLimiter();
app.UseCors(builder => builder
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowAnyOrigin()
);


app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
);
app.MapFallbackToFile("/index.html");

app.Run();
