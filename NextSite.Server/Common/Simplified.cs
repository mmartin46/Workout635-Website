using System.Reflection;

namespace NextSite.Server.Common
{
    public class Simplified
    {
        /// <summary>
        ///     Get the properties of an object.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="obj"></param>
        /// <returns></returns>
        public static PropertyInfo[] GetProperties<T>(T obj)
        {
            if (obj == null)
            {
                return new PropertyInfo[0];
            }
            return obj.GetType().GetProperties(System.Reflection.BindingFlags.Public | BindingFlags.Instance);
        }
        /// <summary>
        /// Checks if the properties of an object are empty or null.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="obj"></param>
        /// <returns></returns>
        public static bool HasEmptyOrNullProperties<T>(T obj)
        {
            foreach (PropertyInfo property in GetProperties<T>(obj))
            {
                if (property.GetValue(obj) == null || property.GetValue(obj)?.ToString()?.Length <= 1)
                {
                    return false;
                }
            }
            return true;
        }
    }
}
