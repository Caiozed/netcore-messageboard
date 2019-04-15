﻿// <auto-generated />
using System;
using AngularNetCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AngularNetCore.Migrations.FollowersUsers
{
    [DbContext(typeof(FollowersUsersContext))]
    partial class FollowersUsersContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.2-servicing-10034")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AngularNetCore.Models.FollowerUser", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("FollowerId");

                    b.Property<int?>("Id")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.HasKey("UserId", "FollowerId");

                    b.HasAlternateKey("Id");

                    b.ToTable("FollowerUser");
                });
#pragma warning restore 612, 618
        }
    }
}
