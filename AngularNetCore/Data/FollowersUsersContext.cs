using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AngularNetCore.Models
{
    public class FollowersUsersContext : DbContext
    {
        public FollowersUsersContext(DbContextOptions<FollowersUsersContext> options)
            : base(options)
        {
        }

        public DbSet<AngularNetCore.Models.FollowerUser> FollowerUser { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<FollowerUser>().HasKey(s=> new { s.UserId, s.FollowerId});
        }
    }
}
