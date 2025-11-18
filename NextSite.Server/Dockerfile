FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy project files
COPY *.csproj ./
# Restore dependencies
RUN dotnet restore

# Copy source code
COPY . .

# Build the app
RUN dotnet build -c Release -o /app/build

# Publish the app
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Install curl for healthcheck
RUN apt-get update && \
    apt-get install -y curl && \
    rm -rf /var/lib/apt/lists/*

# Copy the published files
COPY --from=build /app/publish .

# Create image directory
RUN mkdir -p /app/wwwroot/images

# Expose port 8080  
EXPOSE 8080

# Set environment variable for port
ENV ASPNETCORE_URLS=http://+:8080

# Set to Production
ENV ASPNETCORE_ENVIRONMENT=Production

# Start the app
ENTRYPOINT ["dotnet", "NextSite.Server.dll"]