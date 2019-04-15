using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularNetCore.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? Id { get; set; }
        public string Username { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Post> Posts { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }

        [NotMapped]
        public virtual ICollection<FollowerUser> Followers { get; set; }
        [NotMapped]
        public virtual ICollection<FollowerUser> Following { get; set; }

    }
}
