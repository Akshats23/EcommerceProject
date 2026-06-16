using Microsoft.EntityFrameworkCore;
using EcommerceAPI.Models;

namespace EcommerceAPI.Data;

public class EcommerceDbContext : DbContext
{
    public EcommerceDbContext(DbContextOptions<EcommerceDbContext> options)
        : base(options)
    {
    }
    public DbSet<Product> Products { get; set; }
    // We will add these later:
    // public DbSet<Product> Products { get; set; }
    // public DbSet<Cart> Carts { get; set; }
    // public DbSet<Order> Orders { get; set; }
}