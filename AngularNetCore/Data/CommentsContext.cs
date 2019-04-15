using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AngularNetCore.Models
{
    public class CommentsContext : DbContext
    {
        public CommentsContext (DbContextOptions<CommentsContext> options)
            : base(options)
        {
        }

        public DbSet<AngularNetCore.Models.Comment> Comment { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Comment>().HasKey(s=> new { s.PostId, s.UserId, s.Id});
            modelBuilder.Entity<Comment>().HasOne(s => s.Post).WithMany(w => w.Comments).HasForeignKey(f => f.PostId);
            modelBuilder.Entity<Comment>().HasOne(s => s.User).WithMany(w => w.Comments).HasForeignKey(f => f.UserId);
        }
    }
}
