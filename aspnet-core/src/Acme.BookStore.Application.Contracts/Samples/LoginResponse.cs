using System;
using System.Collections.Generic;
using System.Text;

namespace Acme.BookStore.Samples
{
    public class LoginResponse
    {
        public string Token { get; set; }
        public string Expiration { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
    }
}
