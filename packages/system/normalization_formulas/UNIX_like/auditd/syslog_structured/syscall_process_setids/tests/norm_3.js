{
  "subject": "account",
  "action": "elevate",
  "object": "process",
  "status": "success",
  "chain_id": "493244162",
  "datafield1": "sshd",
  "event_src.category": "Operating system",
  "event_src.ip": "10.0.176.79",
  "event_src.rule": "pt_siem_api_setuid",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_process_setids",
  "importance": "medium",
  "labels": "node_contains_ext_ip",
  "msgid": "setreuid",
  "object.account.group": "git",
  "object.account.id": "0",
  "object.account.name": "root",
  "object.new_value": "x | 0",
  "object.process.fullpath": "/usr/sbin/sshd",
  "object.process.id": "31646",
  "object.process.name": "sshd",
  "object.process.parent.id": "1685",
  "object.process.path": "/usr/sbin/",
  "object.property": "ruid | euid",
  "object.value": "0 | 0",
  "subject.account.id": "998",
  "subject.account.name": "git",
  "subject.account.privileges": "0",
  "subject.account.session_id": "3399639",
  "subject.process.fullpath": "/usr/sbin/sshd",
  "subject.process.id": "31646",
  "subject.process.meta": "/usr/sbin/sshd -D -R",
  "subject.process.name": "sshd",
  "subject.process.parent.id": "1685",
  "subject.process.path": "/usr/sbin/",
  "time": "2022-05-23T09:31:42.000Z"
}