using System;
using System.IO;

namespace RecursiveInterface.Core.FileSystem
{
    public class File
    {
        public DateTime CreationTime { get; set; }
        public string DirectoryName { get; set; }
        public bool Exists { get; set; }
        public string Extension { get; set; }
        public string FullName { get; set; }
        public long Length { get; set; }
        public string Name { get; set; }

        public static File FromFileInfo(FileInfo info) => new File
        {
            CreationTime = info.CreationTime,
            DirectoryName = info.DirectoryName,
            Exists = info.Exists,
            Extension = info.Extension,
            FullName = info.FullName,
            Length = info.Length,
            Name = info.Name
        };
    }
}