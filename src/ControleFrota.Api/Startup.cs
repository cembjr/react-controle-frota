using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cembjr.ControleFrota.Business.Interfaces;
using Cembjr.ControleFrota.Data.Context;
using Cembjr.ControleFrota.Data.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using AutoMapper;

namespace ControleFrota.Api
{
    public class Startup
    {
        private const string CorsPolice = "CorsPolice";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<IAtendenteRepository, AtendenteRepository>();
            services.AddTransient<IVeiculoRepository, VeiculoRepository>();
            services.AddTransient<IMotoristaRepository, MotoristaRepository>();
            services.AddTransient<IServicoRepository, ServicoRepository>();

            services.AddDbContext<ControleFrotaContext>(opt => opt.UseSqlServer(Configuration.GetConnectionString("controleFrota")));

            services.AddAutoMapper(typeof(Startup));

            services.AddCors(opt =>
            {
                opt.AddPolicy(name: CorsPolice, builder =>
                {
                    builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
                });
            });

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(CorsPolice);

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
