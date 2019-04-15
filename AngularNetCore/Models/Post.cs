using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularNetCore.Models
{
    public class Post
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? Id { get; set; }
        public string Message { get; set; }
        public DateTime Date { get; set; }

        public int? UserId { get; set; }
        public User User { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }
    }
}
