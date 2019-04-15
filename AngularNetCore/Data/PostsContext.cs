using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AngularNetCore.Models
{
    public class PostsContext : DbContext
    {
        public PostsContext(DbContextOptions<PostsContext> options)
            : base(options)
        {
        }

        public DbSet<AngularNetCore.Models.Post> Post { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Post>()
                .HasOne(c => c.User)
                .WithMany(s => s.Posts);
        }
    }
}
