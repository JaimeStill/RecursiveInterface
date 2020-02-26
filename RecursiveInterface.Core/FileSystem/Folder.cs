using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;

namespace RecursiveInterface.Core.FileSystem
{
    public class Folder
    {
        private static EnumerationOptions enumerationOptions = new EnumerationOptions
        {
            IgnoreInaccessible = true,
            RecurseSubdirectories = false
        };

        public DateTime CreationTime { get; set; }
        public bool Exists { get; set; }
        public string Path { get; set; }
        public List<Folder> Folders { get; set; }
        public List<File> Files { get; set; }

        public static Folder FromPath(string path) => FromDirectoryInfo(new DirectoryInfo(path));

        static Folder FromDirectoryInfo(DirectoryInfo info) => new Folder
        {
            CreationTime = info.CreationTime,
            Exists = info.Exists,
            Path = info.FullName,
            Folders = GetFolderFolders(info.EnumerateDirectories("**", enumerationOptions)),
            Files = GetFolderFiles(info.EnumerateFiles("**", enumerationOptions))
        };

        static Folder GetSubDirectory(DirectoryInfo info) => new Folder
        {
            CreationTime = info.CreationTime,
            Exists = info.Exists,
            Path = info.FullName
        };

        static List<Folder> GetFolderFolders(IEnumerable<DirectoryInfo> directories) =>
            directories
                .Select(x => GetSubDirectory(x))
                .ToList();

        static List<File> GetFolderFiles(IEnumerable<FileInfo> files) =>
            files
                .Select(x => File.FromFileInfo(x))
                .ToList();
    }
}