{
  "action": "create",
  "object": "file_object",
  "status": "success",
  "category.generic": "File System Object",
  "category.high": "System Management",
  "category.low": "Manipulation",
  "chain_id": "16256",
  "datafield1": "packer",
  "datafield2": "gitlab-runner",
  "datafield3": "0755",
  "event_src.category": "Operating system",
  "event_src.ip": "10.10.128.13",
  "event_src.rule": "pt_siem_home_modify",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_folder_modify",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "msgid": "mkdirat",
  "numfield2": 1066,
  "object.account.group": "gitlab-runner",
  "object.account.id": "1066",
  "object.account.name": "gitlab-runner",
  "object.id": "2622025",
  "object.path": "/home/gitlab-runner/builds/3yNj9zKj/0/oavdeev/packer/builds/windows/win2022_yc/../../../../disk/",
  "object.type": "directory",
  "subject.account.id": "1066",
  "subject.account.name": "gitlab-runner",
  "subject.account.privileges": "1066",
  "subject.account.session_id": "4294967295",
  "subject.process.cwd": "/home/gitlab-runner/builds/3yNj9zKj/0/oavdeev/packer/builds/windows/win2022_yc",
  "subject.process.fullpath": "/usr/local/bin/packer",
  "subject.process.id": "3071",
  "subject.process.meta": "/usr/local/bin/packer plugin packer-builder-qemu",
  "subject.process.name": "packer",
  "subject.process.parent.id": "3045",
  "subject.process.path": "/usr/local/bin/",
  "time": "2023-05-12T18:46:08.000Z"
}