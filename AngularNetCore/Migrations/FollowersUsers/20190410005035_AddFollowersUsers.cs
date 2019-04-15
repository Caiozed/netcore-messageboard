using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularNetCore.Migrations.FollowersUsers
{
    public partial class AddFollowersUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FollowerUser",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false),
                    FollowerId = table.Column<int>(nullable: false),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FollowerUser", x => new { x.UserId, x.FollowerId });
                    table.UniqueConstraint("AK_FollowerUser_Id", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FollowerUser");
        }
    }
}
