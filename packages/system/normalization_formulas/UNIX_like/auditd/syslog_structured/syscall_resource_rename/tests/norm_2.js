{
  "subject": "account",
  "action": "move",
  "object": "file_object",
  "status": "success",
  "category.generic": "File System Object",
  "category.high": "System Management",
  "category.low": "Manipulation",
  "chain_id": "2062163",
  "datafield1": "mv",
  "datafield2": "root",
  "datafield3": "0644",
  "event_src.category": "Operating system",
  "event_src.ip": "10.0.217.72",
  "event_src.rule": "pt_siem_home_modify",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_resource_rename",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "logon_service": "pts/1",
  "msgid": "renameat2",
  "numfield2": 0,
  "object.account.group": "root",
  "object.account.id": "0",
  "object.account.name": "root",
  "object.fullpath": "/root/empty_file",
  "object.id": "526425",
  "object.name": "empty_file",
  "object.new_value": "/home/user/moved_empty_file",
  "object.path": "/root/",
  "object.property": "fullpath",
  "object.type": "regular_file",
  "subject.account.id": "0",
  "subject.account.name": "root",
  "subject.account.privileges": "0",
  "subject.account.session_id": "16456",
  "subject.process.cwd": "/root",
  "subject.process.fullpath": "/usr/bin/mv",
  "subject.process.id": "18597",
  "subject.process.meta": "mv empty_file /home/user/moved_empty_file",
  "subject.process.name": "mv",
  "subject.process.parent.id": "18575",
  "subject.process.path": "/usr/bin/",
  "time": "2020-03-31T15:35:10.000Z"
}