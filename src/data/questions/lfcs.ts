/**
 * LFCS - Linux Foundation Certified System Administrator
 * Practice Questions (60 questions - matches exam format)
 *
 * Exam Domains:
 * - Essential Commands (25%) - 15 questions
 * - Operation of Running Systems (20%) - 12 questions
 * - User and Group Management (10%) - 6 questions
 * - Networking (12%) - 7 questions
 * - Service Configuration (20%) - 12 questions
 * - Storage Management (13%) - 8 questions
 *
 * Topics covered:
 * - Linux commands, file manipulation, text processing
 * - systemd services, process management, boot process
 * - Users, groups, permissions, sudo
 * - ip, ss, firewall, DNS, SSH
 * - Apache, Nginx, NFS, Samba
 * - LVM, filesystems, partitions, RAID
 *
 * correctAnswer distribution: 15 each for 0, 1, 2, 3
 */

import type { Question } from '@/types/quiz';

export const LFCS_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: Essential Commands (25%) - 15 questions
  // ============================================
  {
    id: 'lfcs-001',
    domain: 'Essential Commands',
    question: 'Which command is used to search for files in a directory hierarchy?',
    options: ['find', 'grep', 'locate', 'which'],
    correctAnswer: 0,
    explanation:
      'The find command searches for files in a directory hierarchy based on various criteria like name, type, size, permissions, and modification time. Unlike locate which uses a database, find searches the filesystem in real-time.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/find.1.html)',
    difficulty: 'easy',
    tags: ['find', 'search', 'files', 'commands'],
  },
  {
    id: 'lfcs-002',
    domain: 'Essential Commands',
    question: 'What does the command "chmod 755 file.sh" do?',
    options: [
      'Sets read permission for all users',
      'Sets owner: rwx, group: rx, others: rx',
      'Makes the file immutable',
      'Changes the file owner',
    ],
    correctAnswer: 1,
    explanation:
      'chmod 755 sets permissions using octal notation: 7 (rwx) for owner, 5 (r-x) for group, and 5 (r-x) for others. This allows the owner to read, write, and execute, while group and others can only read and execute.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/chmod.1.html)',
    difficulty: 'medium',
    tags: ['chmod', 'permissions', 'security'],
  },
  {
    id: 'lfcs-003',
    domain: 'Essential Commands',
    question: 'Which command displays disk usage of files and directories?',
    options: ['ls -l', 'df -h', 'du', 'stat'],
    correctAnswer: 2,
    explanation:
      'The du (disk usage) command estimates file space usage. It reports the space used by files and directories. Common options include -h for human-readable format and -s for summary.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/du.1.html)',
    difficulty: 'easy',
    tags: ['du', 'disk', 'storage', 'commands'],
  },
  {
    id: 'lfcs-004',
    domain: 'Essential Commands',
    question: 'Which command is used to compare two files line by line?',
    options: ['cmp', 'cat', 'more', 'diff'],
    correctAnswer: 3,
    explanation:
      'The diff command compares files line by line and displays the differences. It is commonly used to see changes between file versions. The cmp command compares byte by byte instead.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/diff.1.html)',
    difficulty: 'easy',
    tags: ['diff', 'compare', 'files'],
  },
  {
    id: 'lfcs-005',
    domain: 'Essential Commands',
    question: 'What does the command "ln -s /path/to/target linkname" create?',
    options: [
      'A symbolic (soft) link pointing to the target',
      'A hard link to the target',
      'A copy of the target file',
      'A backup of the target file',
    ],
    correctAnswer: 0,
    explanation:
      'ln -s creates a symbolic (soft) link, which is a special file that points to another file or directory. Unlike hard links, symbolic links can span filesystems and link to directories.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/ln.1.html)',
    difficulty: 'medium',
    tags: ['ln', 'symlink', 'links'],
  },
  {
    id: 'lfcs-006',
    domain: 'Essential Commands',
    question: 'Which command displays the last 10 lines of a file by default?',
    options: ['head', 'tail', 'less', 'cat'],
    correctAnswer: 1,
    explanation:
      'The tail command outputs the last 10 lines of a file by default. Use -n to specify a different number of lines, and -f to follow the file as it grows (useful for logs).\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/tail.1.html)',
    difficulty: 'easy',
    tags: ['tail', 'files', 'text'],
  },
  {
    id: 'lfcs-007',
    domain: 'Essential Commands',
    question: 'What is the correct way to redirect both stdout and stderr to a file?',
    options: [
      'command 2> file',
      'command | file',
      'command &> file (or command > file 2>&1)',
      'command >> file',
    ],
    correctAnswer: 2,
    explanation:
      'Both "command &> file" and "command > file 2>&1" redirect stdout (1) and stderr (2) to the same file. The &> syntax is a Bash shorthand. 2>&1 redirects stderr to where stdout is going.\n\nLearn more: [Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html#Redirections)',
    difficulty: 'medium',
    tags: ['redirection', 'stdout', 'stderr', 'bash'],
  },
  {
    id: 'lfcs-008',
    domain: 'Essential Commands',
    question: 'Which command is used to change the owner of a file?',
    options: ['chmod', 'chgrp', 'usermod', 'chown'],
    correctAnswer: 3,
    explanation:
      'chown changes the user and/or group ownership of files. Syntax: chown user:group file. Use chgrp to change only the group, and chmod to change permissions (not ownership).\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/chown.1.html)',
    difficulty: 'easy',
    tags: ['chown', 'ownership', 'files'],
  },
  {
    id: 'lfcs-009',
    domain: 'Essential Commands',
    question: 'What does the "grep -r" option do?',
    options: [
      'Reverse the output',
      'Search recursively through directories',
      'Show only filenames',
      'Use extended regular expressions',
    ],
    correctAnswer: 1,
    explanation:
      'grep -r (or --recursive) searches for patterns recursively through all files in the specified directory and its subdirectories. Use -R to also follow symbolic links.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/grep.1.html)',
    difficulty: 'medium',
    tags: ['grep', 'search', 'recursive'],
  },
  {
    id: 'lfcs-010',
    domain: 'Essential Commands',
    question: 'Which command displays the full path of the current working directory?',
    options: ['cd', 'pwd', 'ls', 'whereis'],
    correctAnswer: 1,
    explanation:
      'pwd (print working directory) displays the absolute pathname of the current working directory. It is one of the most basic navigation commands in Linux.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/pwd.1.html)',
    difficulty: 'easy',
    tags: ['pwd', 'navigation', 'directories'],
  },
  {
    id: 'lfcs-011',
    domain: 'Essential Commands',
    question: 'What is the purpose of the "xargs" command?',
    options: [
      'Execute commands repeatedly',
      'Display command arguments',
      'Build and execute command lines from standard input',
      'Export environment variables',
    ],
    correctAnswer: 2,
    explanation:
      'xargs reads items from standard input and executes a command with those items as arguments. It is often used with find or grep to process multiple files efficiently.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/xargs.1.html)',
    difficulty: 'medium',
    tags: ['xargs', 'pipes', 'commands'],
  },
  {
    id: 'lfcs-012',
    domain: 'Essential Commands',
    question: 'Which sed command replaces all occurrences of "old" with "new" in a file?',
    options: [
      'sed "s/old/new/" file',
      'sed "r/old/new/" file',
      'sed "d/old/new/" file',
      'sed "s/old/new/g" file',
    ],
    correctAnswer: 3,
    explanation:
      'sed "s/old/new/g" performs a global substitution (g flag), replacing all occurrences on each line. Without the g flag, only the first occurrence on each line is replaced.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/sed.1.html)',
    difficulty: 'medium',
    tags: ['sed', 'text-processing', 'substitution'],
  },
  {
    id: 'lfcs-013',
    domain: 'Essential Commands',
    question: 'What does the command "wc -l filename" display?',
    options: [
      'Number of words in the file',
      'Number of characters in the file',
      'Number of lines in the file',
      'Number of bytes in the file',
    ],
    correctAnswer: 2,
    explanation:
      'wc -l counts and displays the number of lines in a file. Other options: -w for words, -c for bytes, -m for characters. Without options, wc shows lines, words, and bytes.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/wc.1.html)',
    difficulty: 'easy',
    tags: ['wc', 'count', 'lines'],
  },
  {
    id: 'lfcs-014',
    domain: 'Essential Commands',
    question: 'Which command is used to sort lines of text files?',
    options: ['uniq', 'cut', 'tr', 'sort'],
    correctAnswer: 3,
    explanation:
      'The sort command sorts lines of text files alphabetically by default. Options include -n for numeric sort, -r for reverse, -u for unique, and -k to sort by specific columns.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/sort.1.html)',
    difficulty: 'easy',
    tags: ['sort', 'text-processing', 'files'],
  },
  {
    id: 'lfcs-015',
    domain: 'Essential Commands',
    question: 'What is the purpose of the "tar" command with the -xvzf options?',
    options: [
      'Create a compressed archive',
      'List contents of an archive',
      'Verify archive integrity',
      'Extract a gzip-compressed tar archive with verbose output',
    ],
    correctAnswer: 3,
    explanation:
      'tar -xvzf extracts (x) files from a gzip-compressed (z) archive file (f) with verbose output (v). This is the standard way to extract .tar.gz or .tgz files.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/tar.1.html)',
    difficulty: 'medium',
    tags: ['tar', 'archive', 'compression'],
  },

  // ============================================
  // DOMAIN: Operation of Running Systems (20%) - 12 questions
  // ============================================
  {
    id: 'lfcs-016',
    domain: 'Operation of Running Systems',
    question: 'Which command is used to start a systemd service?',
    options: [
      'systemctl start servicename',
      'service servicename start',
      'init servicename start',
      'rc.d start servicename',
    ],
    correctAnswer: 0,
    explanation:
      'systemctl start servicename starts a systemd service immediately. systemctl is the primary command for managing systemd services, units, and the system state.\n\nLearn more: [systemd documentation](https://www.freedesktop.org/software/systemd/man/systemctl.html)',
    difficulty: 'easy',
    tags: ['systemctl', 'systemd', 'services'],
  },
  {
    id: 'lfcs-017',
    domain: 'Operation of Running Systems',
    question: 'What is the purpose of the "journalctl" command?',
    options: [
      'Manage system services',
      'Query and display systemd journal logs',
      'Edit configuration files',
      'Schedule cron jobs',
    ],
    correctAnswer: 1,
    explanation:
      'journalctl is used to query and display messages from the systemd journal. Options include -u for specific unit, -f for follow mode, -b for current boot, and --since/--until for time ranges.\n\nLearn more: [systemd documentation](https://www.freedesktop.org/software/systemd/man/journalctl.html)',
    difficulty: 'medium',
    tags: ['journalctl', 'logs', 'systemd'],
  },
  {
    id: 'lfcs-018',
    domain: 'Operation of Running Systems',
    question: 'Which command displays currently running processes?',
    options: ['top', 'ls', 'ps', 'jobs'],
    correctAnswer: 2,
    explanation:
      'ps (process status) displays information about currently running processes. Common usage: ps aux for all processes, ps -ef for full format. top provides real-time monitoring.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/ps.1.html)',
    difficulty: 'easy',
    tags: ['ps', 'processes', 'monitoring'],
  },
  {
    id: 'lfcs-019',
    domain: 'Operation of Running Systems',
    question: 'What signal does "kill -9 PID" send to a process?',
    options: [
      'SIGHUP (hangup)',
      'SIGTERM (terminate)',
      'SIGINT (interrupt)',
      'SIGKILL (force kill)',
    ],
    correctAnswer: 3,
    explanation:
      'kill -9 sends SIGKILL (signal 9), which forcefully terminates a process immediately. Unlike SIGTERM (15), SIGKILL cannot be caught or ignored by the process.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/kill.1.html)',
    difficulty: 'medium',
    tags: ['kill', 'signals', 'processes'],
  },
  {
    id: 'lfcs-020',
    domain: 'Operation of Running Systems',
    question: 'Which command enables a service to start automatically at boot?',
    options: [
      'systemctl enable service',
      'systemctl restart service',
      'systemctl reload service',
      'systemctl daemon-reload',
    ],
    correctAnswer: 0,
    explanation:
      'systemctl enable service creates symbolic links to start the service automatically at boot. Use systemctl disable to remove the automatic startup. The service does not start immediately; use start for that.\n\nLearn more: [systemd documentation](https://www.freedesktop.org/software/systemd/man/systemctl.html)',
    difficulty: 'easy',
    tags: ['systemctl', 'enable', 'boot'],
  },
  {
    id: 'lfcs-021',
    domain: 'Operation of Running Systems',
    question: 'What does the "nice" command do?',
    options: [
      'Display process priority',
      'Run a program with modified scheduling priority',
      'Kill processes nicely',
      'Show CPU usage',
    ],
    correctAnswer: 1,
    explanation:
      'nice runs a command with a modified scheduling priority (niceness). Values range from -20 (highest priority) to 19 (lowest). Only root can set negative values. Use renice to change running processes.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/nice.1.html)',
    difficulty: 'medium',
    tags: ['nice', 'priority', 'scheduling'],
  },
  {
    id: 'lfcs-022',
    domain: 'Operation of Running Systems',
    question: 'Which runlevel corresponds to multi-user mode with networking in SysVinit?',
    options: ['Runlevel 1', 'Runlevel 0', 'Runlevel 3', 'Runlevel 5'],
    correctAnswer: 2,
    explanation:
      'Runlevel 3 is multi-user mode with networking (text mode). Runlevel 5 is multi-user with GUI. Runlevel 0 is halt, 1 is single-user, 6 is reboot. Systemd uses targets instead of runlevels.\n\nLearn more: [Linux Runlevels](https://wiki.archlinux.org/title/Systemd#Mapping_between_SysV_runlevels_and_systemd_targets)',
    difficulty: 'medium',
    tags: ['runlevel', 'boot', 'init'],
  },
  {
    id: 'lfcs-023',
    domain: 'Operation of Running Systems',
    question: 'What is the systemd equivalent of runlevel 5 (graphical mode)?',
    options: ['multi-user.target', 'rescue.target', 'emergency.target', 'graphical.target'],
    correctAnswer: 3,
    explanation:
      'graphical.target is the systemd equivalent of runlevel 5. It includes multi-user.target and starts the graphical login manager (display manager).\n\nLearn more: [systemd documentation](https://www.freedesktop.org/software/systemd/man/systemd.special.html)',
    difficulty: 'medium',
    tags: ['systemd', 'targets', 'graphical'],
  },
  {
    id: 'lfcs-024',
    domain: 'Operation of Running Systems',
    question: 'Which command shows real-time system resource usage?',
    options: ['top', 'ps aux', 'vmstat', 'uptime'],
    correctAnswer: 0,
    explanation:
      'top provides a dynamic real-time view of running processes and system resource usage including CPU, memory, and swap. Press q to quit, k to kill a process, r to renice.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/top.1.html)',
    difficulty: 'easy',
    tags: ['top', 'monitoring', 'processes'],
  },
  {
    id: 'lfcs-025',
    domain: 'Operation of Running Systems',
    question: 'What does "systemctl daemon-reload" do?',
    options: [
      'Restarts all services',
      'Reloads systemd manager configuration after unit file changes',
      'Reboots the system',
      'Clears the journal logs',
    ],
    correctAnswer: 1,
    explanation:
      'systemctl daemon-reload reloads the systemd manager configuration. This is required after modifying unit files to make systemd aware of the changes without rebooting.\n\nLearn more: [systemd documentation](https://www.freedesktop.org/software/systemd/man/systemctl.html)',
    difficulty: 'medium',
    tags: ['systemctl', 'daemon-reload', 'units'],
  },
  {
    id: 'lfcs-026',
    domain: 'Operation of Running Systems',
    question: 'Which directory contains systemd unit files provided by installed packages?',
    options: [
      '/etc/systemd/system/',
      '/run/systemd/system/',
      '/usr/lib/systemd/system/',
      '/home/systemd/',
    ],
    correctAnswer: 2,
    explanation:
      '/usr/lib/systemd/system/ contains unit files installed by packages. /etc/systemd/system/ is for local customizations and overrides, with higher priority than /usr/lib.\n\nLearn more: [systemd documentation](https://www.freedesktop.org/software/systemd/man/systemd.unit.html)',
    difficulty: 'medium',
    tags: ['systemd', 'unit-files', 'directories'],
  },
  {
    id: 'lfcs-027',
    domain: 'Operation of Running Systems',
    question: 'What command schedules a one-time task to run at a specific time?',
    options: ['crontab -e', 'batch', 'systemd-timer', 'at'],
    correctAnswer: 3,
    explanation:
      'The at command schedules commands to be executed once at a specific time. Use atq to list pending jobs and atrm to remove jobs. Cron is for recurring tasks.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/at.1p.html)',
    difficulty: 'medium',
    tags: ['at', 'scheduling', 'one-time'],
  },

  // ============================================
  // DOMAIN: User and Group Management (10%) - 6 questions
  // ============================================
  {
    id: 'lfcs-028',
    domain: 'User and Group Management',
    question: 'Which command creates a new user account?',
    options: ['useradd', 'adduser', 'newuser', 'createuser'],
    correctAnswer: 0,
    explanation:
      'useradd is the low-level command to create user accounts. It creates the user entry in /etc/passwd and /etc/shadow. Use -m to create home directory, -s to set shell.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man8/useradd.8.html)',
    difficulty: 'easy',
    tags: ['useradd', 'users', 'accounts'],
  },
  {
    id: 'lfcs-029',
    domain: 'User and Group Management',
    question: 'Which file stores encrypted user passwords?',
    options: ['/etc/passwd', '/etc/shadow', '/etc/group', '/etc/security'],
    correctAnswer: 1,
    explanation:
      '/etc/shadow stores encrypted passwords and password aging information. It is readable only by root. /etc/passwd contains user account information but passwords were moved to shadow for security.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man5/shadow.5.html)',
    difficulty: 'easy',
    tags: ['shadow', 'passwords', 'security'],
  },
  {
    id: 'lfcs-030',
    domain: 'User and Group Management',
    question: 'What does the command "usermod -aG wheel username" do?',
    options: [
      'Removes user from wheel group',
      'Changes user primary group to wheel',
      'Appends user to wheel group without removing from other groups',
      'Creates the wheel group',
    ],
    correctAnswer: 2,
    explanation:
      'usermod -aG appends (-a) the user to the supplementary group (-G) wheel without removing them from other groups. Without -a, the user would be removed from all other supplementary groups.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man8/usermod.8.html)',
    difficulty: 'medium',
    tags: ['usermod', 'groups', 'wheel'],
  },
  {
    id: 'lfcs-031',
    domain: 'User and Group Management',
    question: 'Which command is used to change user password?',
    options: ['chpasswd', 'usermod -p', 'pwchange', 'passwd'],
    correctAnswer: 3,
    explanation:
      'passwd is the standard command for users to change their own password or for root to change any users password. It updates the /etc/shadow file with the encrypted password.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/passwd.1.html)',
    difficulty: 'easy',
    tags: ['passwd', 'password', 'users'],
  },
  {
    id: 'lfcs-032',
    domain: 'User and Group Management',
    question: 'What is the purpose of the /etc/sudoers file?',
    options: [
      'Store user passwords',
      'Define group memberships',
      'List system services',
      'Configure sudo privileges and access rules',
    ],
    correctAnswer: 3,
    explanation:
      '/etc/sudoers configures which users can run which commands as other users (typically root) using sudo. Always edit with visudo to prevent syntax errors that could lock out sudo access.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man5/sudoers.5.html)',
    difficulty: 'medium',
    tags: ['sudoers', 'sudo', 'privileges'],
  },
  {
    id: 'lfcs-033',
    domain: 'User and Group Management',
    question: 'Which command displays the groups a user belongs to?',
    options: ['groups', 'users', 'whoami', 'id'],
    correctAnswer: 0,
    explanation:
      'groups displays the groups a user belongs to. The id command shows more details including UID, GID, and all group memberships. Both can take a username argument.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/groups.1.html)',
    difficulty: 'easy',
    tags: ['groups', 'users', 'membership'],
  },

  // ============================================
  // DOMAIN: Networking (12%) - 7 questions
  // ============================================
  {
    id: 'lfcs-034',
    domain: 'Networking',
    question: 'Which command displays network interface configuration and IP addresses?',
    options: ['ip addr', 'netstat', 'route', 'hostname'],
    correctAnswer: 0,
    explanation:
      'ip addr (or ip a) displays IP addresses and network interface information. The ip command is the modern replacement for ifconfig, route, and other legacy networking commands.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man8/ip-address.8.html)',
    difficulty: 'easy',
    tags: ['ip', 'networking', 'interfaces'],
  },
  {
    id: 'lfcs-035',
    domain: 'Networking',
    question: 'Which command shows active network connections and listening ports?',
    options: ['ping', 'ss', 'traceroute', 'dig'],
    correctAnswer: 1,
    explanation:
      'ss (socket statistics) displays network socket information including listening ports and established connections. It is the modern replacement for netstat. Common options: -t (TCP), -u (UDP), -l (listening), -n (numeric).\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man8/ss.8.html)',
    difficulty: 'medium',
    tags: ['ss', 'sockets', 'networking'],
  },
  {
    id: 'lfcs-036',
    domain: 'Networking',
    question: 'Which file is used to configure DNS resolver settings?',
    options: ['/etc/hosts', '/etc/nsswitch.conf', '/etc/resolv.conf', '/etc/network/interfaces'],
    correctAnswer: 2,
    explanation:
      '/etc/resolv.conf specifies DNS nameservers and search domains. It contains nameserver entries for DNS resolution. On modern systems, it may be managed by NetworkManager or systemd-resolved.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man5/resolv.conf.5.html)',
    difficulty: 'medium',
    tags: ['dns', 'resolv.conf', 'networking'],
  },
  {
    id: 'lfcs-037',
    domain: 'Networking',
    question: 'What command is used to add a firewall rule in firewalld?',
    options: [
      'iptables -A',
      'firewall-cmd --add-rule',
      'ufw allow',
      'firewall-cmd --add-service or --add-port',
    ],
    correctAnswer: 3,
    explanation:
      'firewall-cmd is used to manage firewalld. Use --add-service=http or --add-port=80/tcp to allow traffic. Add --permanent to persist across reboots, then reload with --reload.\n\nLearn more: [firewalld documentation](https://firewalld.org/documentation/man-pages/firewall-cmd.html)',
    difficulty: 'medium',
    tags: ['firewalld', 'firewall', 'security'],
  },
  {
    id: 'lfcs-038',
    domain: 'Networking',
    question: 'Which command tests if a remote host is reachable over the network?',
    options: ['ping', 'netstat', 'ss', 'ip link'],
    correctAnswer: 0,
    explanation:
      'ping sends ICMP ECHO_REQUEST packets to test network connectivity to a host. It displays round-trip time and packet loss statistics. Use -c to limit the number of packets.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man8/ping.8.html)',
    difficulty: 'easy',
    tags: ['ping', 'connectivity', 'icmp'],
  },
  {
    id: 'lfcs-039',
    domain: 'Networking',
    question: 'What does the command "ip route show" display?',
    options: ['DNS configuration', 'The routing table', 'Network interface status', 'Open ports'],
    correctAnswer: 1,
    explanation:
      'ip route show (or ip r) displays the kernel routing table, showing how network traffic is directed. It shows default gateway, subnet routes, and next-hop information.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man8/ip-route.8.html)',
    difficulty: 'medium',
    tags: ['ip', 'routing', 'networking'],
  },
  {
    id: 'lfcs-040',
    domain: 'Networking',
    question: 'Which port does SSH use by default?',
    options: ['Port 21', 'Port 23', 'Port 22', 'Port 80'],
    correctAnswer: 2,
    explanation:
      'SSH (Secure Shell) uses TCP port 22 by default. Port 21 is FTP, port 23 is Telnet, and port 80 is HTTP. The SSH port can be changed in /etc/ssh/sshd_config.\n\nLearn more: [OpenSSH documentation](https://www.openssh.com/manual.html)',
    difficulty: 'easy',
    tags: ['ssh', 'ports', 'networking'],
  },

  // ============================================
  // DOMAIN: Service Configuration (20%) - 12 questions
  // ============================================
  {
    id: 'lfcs-041',
    domain: 'Service Configuration',
    question: 'Which file is the main configuration file for the Apache HTTP server?',
    options: [
      '/etc/apache2/apache2.conf or /etc/httpd/conf/httpd.conf',
      '/etc/nginx/nginx.conf',
      '/var/www/html/config',
      '/etc/http/config',
    ],
    correctAnswer: 0,
    explanation:
      'Apache main config is /etc/apache2/apache2.conf on Debian/Ubuntu or /etc/httpd/conf/httpd.conf on RHEL/CentOS. Virtual hosts are typically in sites-available/ or conf.d/ directories.\n\nLearn more: [Apache documentation](https://httpd.apache.org/docs/current/configuring.html)',
    difficulty: 'medium',
    tags: ['apache', 'httpd', 'configuration'],
  },
  {
    id: 'lfcs-042',
    domain: 'Service Configuration',
    question: 'What is the main configuration file for Nginx?',
    options: [
      '/etc/httpd/httpd.conf',
      '/etc/nginx/nginx.conf',
      '/var/nginx/config',
      '/usr/share/nginx/conf',
    ],
    correctAnswer: 1,
    explanation:
      '/etc/nginx/nginx.conf is the main Nginx configuration file. Server blocks (virtual hosts) are typically included from /etc/nginx/sites-enabled/ or /etc/nginx/conf.d/.\n\nLearn more: [Nginx documentation](https://nginx.org/en/docs/beginners_guide.html)',
    difficulty: 'medium',
    tags: ['nginx', 'webserver', 'configuration'],
  },
  {
    id: 'lfcs-043',
    domain: 'Service Configuration',
    question: 'Which command tests Apache configuration syntax without restarting?',
    options: [
      'apache2 -t or httpd -t',
      'apache2 -v',
      'service apache2 status',
      'apachectl fullstatus',
    ],
    correctAnswer: 0,
    explanation:
      'apache2 -t (Debian) or httpd -t (RHEL) tests the configuration file syntax. apachectl configtest also works. Always test configuration before restarting to avoid downtime.\n\nLearn more: [Apache documentation](https://httpd.apache.org/docs/current/programs/httpd.html)',
    difficulty: 'medium',
    tags: ['apache', 'configuration', 'testing'],
  },
  {
    id: 'lfcs-044',
    domain: 'Service Configuration',
    question: 'Which directory typically contains SSH server configuration?',
    options: ['/home/.ssh/', '/etc/ssh/', '/var/ssh/', '/usr/ssh/'],
    correctAnswer: 1,
    explanation:
      '/etc/ssh/ contains SSH configuration files including sshd_config (server) and ssh_config (client defaults). User SSH keys are stored in ~/.ssh/ in home directories.\n\nLearn more: [OpenSSH documentation](https://www.openssh.com/manual.html)',
    difficulty: 'easy',
    tags: ['ssh', 'configuration', 'security'],
  },
  {
    id: 'lfcs-045',
    domain: 'Service Configuration',
    question: 'What directive in sshd_config disables root login over SSH?',
    options: ['DenyRoot yes', 'RootLogin no', 'PermitRootLogin no', 'AllowRoot false'],
    correctAnswer: 2,
    explanation:
      'PermitRootLogin no in /etc/ssh/sshd_config prevents direct root login via SSH. Other options include "prohibit-password" (allow only key-based) or "forced-commands-only".\n\nLearn more: [sshd_config man page](https://man7.org/linux/man-pages/man5/sshd_config.5.html)',
    difficulty: 'medium',
    tags: ['ssh', 'security', 'configuration'],
  },
  {
    id: 'lfcs-046',
    domain: 'Service Configuration',
    question: 'Which service is used for network time synchronization?',
    options: ['sshd', 'httpd', 'chronyd or ntpd', 'named'],
    correctAnswer: 2,
    explanation:
      'chronyd (Chrony) or ntpd (NTP daemon) synchronize system time with network time servers. Chrony is preferred on modern systems for better accuracy and faster synchronization.\n\nLearn more: [Chrony documentation](https://chrony.tuxfamily.org/documentation.html)',
    difficulty: 'medium',
    tags: ['ntp', 'chrony', 'time'],
  },
  {
    id: 'lfcs-047',
    domain: 'Service Configuration',
    question: 'Which file configures NFS exports on a server?',
    options: ['/etc/exports', '/etc/fstab', '/etc/nfs.conf', '/etc/shares'],
    correctAnswer: 0,
    explanation:
      '/etc/exports defines which directories are shared via NFS and with what permissions. After editing, run exportfs -ra to apply changes without restarting the NFS server.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man5/exports.5.html)',
    difficulty: 'medium',
    tags: ['nfs', 'exports', 'shares'],
  },
  {
    id: 'lfcs-048',
    domain: 'Service Configuration',
    question: 'What is the purpose of the /etc/hosts file?',
    options: [
      'Map hostnames to IP addresses locally',
      'Store DNS server addresses',
      'Configure network interfaces',
      'Define firewall rules',
    ],
    correctAnswer: 0,
    explanation:
      '/etc/hosts provides static hostname to IP address mappings. It is checked before DNS by default (configurable in /etc/nsswitch.conf). Useful for local overrides or when DNS is unavailable.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man5/hosts.5.html)',
    difficulty: 'easy',
    tags: ['hosts', 'dns', 'networking'],
  },
  {
    id: 'lfcs-049',
    domain: 'Service Configuration',
    question: 'Which command reloads Nginx configuration without stopping the service?',
    options: ['systemctl restart nginx', 'nginx -t', 'nginx -s stop', 'systemctl reload nginx'],
    correctAnswer: 3,
    explanation:
      'systemctl reload nginx gracefully reloads configuration without dropping connections. Always run nginx -t first to test configuration syntax before reloading.\n\nLearn more: [Nginx documentation](https://nginx.org/en/docs/control.html)',
    difficulty: 'medium',
    tags: ['nginx', 'reload', 'configuration'],
  },
  {
    id: 'lfcs-050',
    domain: 'Service Configuration',
    question: 'What is the primary configuration file for Samba shares?',
    options: [
      '/etc/samba/samba.conf',
      '/etc/smb/shares.conf',
      '/etc/samba/smb.conf',
      '/var/samba/config',
    ],
    correctAnswer: 2,
    explanation:
      '/etc/samba/smb.conf is the main Samba configuration file defining shares, security settings, and global options. Use testparm to check configuration syntax.\n\nLearn more: [Samba documentation](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html)',
    difficulty: 'medium',
    tags: ['samba', 'smb', 'shares'],
  },
  {
    id: 'lfcs-051',
    domain: 'Service Configuration',
    question: 'Which cron field specifies the hour (0-23)?',
    options: ['First field', 'Second field', 'Third field', 'Fourth field'],
    correctAnswer: 1,
    explanation:
      'Cron fields are: minute (0-59), hour (0-23), day of month (1-31), month (1-12), day of week (0-7). The second field specifies the hour when the job runs.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man5/crontab.5.html)',
    difficulty: 'medium',
    tags: ['cron', 'scheduling', 'jobs'],
  },
  {
    id: 'lfcs-052',
    domain: 'Service Configuration',
    question: 'What service provides DNS resolution on Linux?',
    options: ['httpd', 'sshd', 'named (BIND) or systemd-resolved', 'smbd'],
    correctAnswer: 2,
    explanation:
      'BIND (named) is the most widely used DNS server software. systemd-resolved provides local DNS caching and resolution on modern systems. dnsmasq is also popular for lightweight DNS.\n\nLearn more: [BIND documentation](https://bind9.readthedocs.io/)',
    difficulty: 'medium',
    tags: ['dns', 'bind', 'named'],
  },

  // ============================================
  // DOMAIN: Storage Management (13%) - 8 questions
  // ============================================
  {
    id: 'lfcs-053',
    domain: 'Storage Management',
    question: 'Which command creates a new partition on a disk?',
    options: ['mkfs', 'mount', 'lsblk', 'fdisk'],
    correctAnswer: 3,
    explanation:
      'fdisk is a command-line utility for disk partitioning. Use fdisk /dev/sdX to manage partitions on a disk. For GPT disks, gdisk or parted are preferred.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man8/fdisk.8.html)',
    difficulty: 'medium',
    tags: ['fdisk', 'partitioning', 'disks'],
  },
  {
    id: 'lfcs-054',
    domain: 'Storage Management',
    question: 'What command formats a partition with ext4 filesystem?',
    options: [
      'mkfs.ext4 /dev/sdX1',
      'format -t ext4 /dev/sdX1',
      'fsck.ext4 /dev/sdX1',
      'tune2fs /dev/sdX1',
    ],
    correctAnswer: 0,
    explanation:
      'mkfs.ext4 (or mkfs -t ext4) creates an ext4 filesystem on a partition. Other common filesystems include xfs (mkfs.xfs), btrfs, and fat32 (mkfs.vfat).\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man8/mkfs.8.html)',
    difficulty: 'medium',
    tags: ['mkfs', 'ext4', 'filesystem'],
  },
  {
    id: 'lfcs-055',
    domain: 'Storage Management',
    question: 'Which file configures filesystems to mount at boot?',
    options: ['/etc/mtab', '/etc/fstab', '/etc/mounts', '/etc/disk.conf'],
    correctAnswer: 1,
    explanation:
      '/etc/fstab contains filesystem mount configurations applied at boot. Each line specifies device, mount point, filesystem type, options, dump, and fsck order.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man5/fstab.5.html)',
    difficulty: 'easy',
    tags: ['fstab', 'mount', 'boot'],
  },
  {
    id: 'lfcs-056',
    domain: 'Storage Management',
    question: 'What is the correct order to create an LVM logical volume?',
    options: [
      'Create LV, then VG, then PV',
      'Create PV, then LV, then VG',
      'Create PV, then VG, then LV',
      'Create VG, then PV, then LV',
    ],
    correctAnswer: 2,
    explanation:
      'LVM order: 1) pvcreate creates Physical Volumes, 2) vgcreate creates Volume Groups from PVs, 3) lvcreate creates Logical Volumes in VGs. This hierarchy allows flexible storage management.\n\nLearn more: [LVM documentation](https://man7.org/linux/man-pages/man8/lvm.8.html)',
    difficulty: 'hard',
    tags: ['lvm', 'pv', 'vg', 'lv'],
  },
  {
    id: 'lfcs-057',
    domain: 'Storage Management',
    question: 'Which command displays block device information?',
    options: ['lsblk', 'df -h', 'free -m', 'du -sh'],
    correctAnswer: 0,
    explanation:
      'lsblk lists information about block devices including disks, partitions, and their mount points. It shows a tree view of storage devices and their relationships.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man8/lsblk.8.html)',
    difficulty: 'easy',
    tags: ['lsblk', 'devices', 'storage'],
  },
  {
    id: 'lfcs-058',
    domain: 'Storage Management',
    question: 'What command checks and repairs ext4 filesystem errors?',
    options: ['mkfs.ext4', 'tune2fs', 'resize2fs', 'e2fsck or fsck.ext4'],
    correctAnswer: 3,
    explanation:
      'e2fsck (or fsck.ext4) checks and repairs ext2/3/4 filesystems. The filesystem must be unmounted or mounted read-only. Use -y to automatically fix errors.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man8/e2fsck.8.html)',
    difficulty: 'medium',
    tags: ['fsck', 'e2fsck', 'repair'],
  },
  {
    id: 'lfcs-059',
    domain: 'Storage Management',
    question: 'Which command extends a logical volume in LVM?',
    options: ['pvextend', 'lvextend', 'vgextend', 'fsextend'],
    correctAnswer: 1,
    explanation:
      'lvextend increases the size of a logical volume. Use -L to specify new size or -l for extents. After extending, resize the filesystem with resize2fs (ext4) or xfs_growfs (XFS).\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man8/lvextend.8.html)',
    difficulty: 'medium',
    tags: ['lvm', 'lvextend', 'resize'],
  },
  {
    id: 'lfcs-060',
    domain: 'Storage Management',
    question: 'What command displays filesystem disk space usage?',
    options: ['du', 'lsblk', 'fdisk -l', 'df'],
    correctAnswer: 3,
    explanation:
      'df (disk free) reports filesystem disk space usage, showing total, used, available space and mount points. Use -h for human-readable sizes, -T to show filesystem types.\n\nLearn more: [Linux man page](https://man7.org/linux/man-pages/man1/df.1.html)',
    difficulty: 'easy',
    tags: ['df', 'disk', 'space'],
  },
];
