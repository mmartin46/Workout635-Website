using MongoDB.Driver;
using NextSite.Server.Models;
using System.Reflection;

namespace NextSite.Server.Services
{
    public class AccountService<T> : GeneralService<T> where T : AccountModel
    {
        public AccountService(string collection) : base(collection) {}

        /// <summary>
        ///     Determines if an account is valid by checking the properties of the Account object
        /// </summary>
        /// <param name="account"></param>
        /// <returns>True if matching, false if not.</returns>
        public bool IsValidAccount(T account)
        {
            foreach (PropertyInfo property in GetProperties(account))
            {
                if (property.GetValue(account) == null)
                {
                    return false;
                }
            }

            return HasMatchingCredentials(account);
        }

        /// <summary>
        /// Checks if the confirm and regular inputs match
        /// </summary>
        /// <param name="account"></param>
        /// <returns>True if matching, false if not.</returns>
        private bool HasMatchingCredentials(T account)
        {
            if (account == null)
            {
                return false;
            }

            if (!account.Password!.Equals(account.ConfirmPassword))
            {
                return false;
            }
            if (!account.Email!.Equals(account.ConfirmEmail))
            {
                return false;
            }

            return true;
        }

        private async Task<List<T>> GetByUsername(string username)
        {
            if (username == null)
            {
                return new List<T>();
            }
            else
            {
                return await _collection.Find(x => x.Username!.Equals(username)).ToListAsync();
            }
        }



        public PropertyInfo[] GetProperties(T account)
        {
            return account.GetType().GetProperties(System.Reflection.BindingFlags.Public | BindingFlags.Instance);
        }

        // new - method from base will be called, not the one here
        /// <summary>
        /// Creates an account if the user doesn't exist and increments the id.
        /// </summary>
        /// <param name="contact"></param>
        /// <returns></returns>
        /// <exception cref="Exception">If the valid isn't valid, it will throw an exception</exception>
        public override async Task CreateAsync(T contact)
        {
            if (!IsValidAccount(contact))
            {
                throw new Exception("Invalid Credentials");
            }

            var users = await GetByUsername(contact.Username!);
            if (users.Count == 0)
            {
                var allUsers = await GetAsync();
                contact.Id = allUsers.Count();
                await _collection.InsertOneAsync(contact);
            }
        }

    }
}
