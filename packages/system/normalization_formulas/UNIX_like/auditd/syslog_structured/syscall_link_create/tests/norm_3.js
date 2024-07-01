{
  "subject": "account",
  "action": "create",
  "object": "link",
  "status": "failure",
  "category.generic": "Link",
  "category.high": "System Management",
  "category.low": "Manipulation",
  "chain_id": "12894111",
  "datafield1": "ln",
  "event_src.category": "Operating system",
  "event_src.ip": "10.10.52.70",
  "event_src.rule": "pt_siem_bin_modify",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_link_create",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "logon_service": "pts/2",
  "msgid": "symlinkat",
  "object.account.group": "root",
  "object.account.id": "0",
  "object.account.name": "root",
  "object.path": "/usr/bin/",
  "object.storage.fullpath": "/opt/gitlab/bin/gitlab-redis-cli",
  "object.storage.name": "gitlab-redis-cli",
  "object.storage.path": "/opt/gitlab/bin/",
  "reason": "File exists",
  "subject.account.id": "1012",
  "subject.account.name": "agolubkin",
  "subject.account.privileges": "0",
  "subject.account.session_id": "7397",
  "subject.process.cwd": "/",
  "subject.process.fullpath": "/usr/bin/ln",
  "subject.process.id": "574",
  "subject.process.meta": "ln -sf /opt/gitlab/bin/gitlab-redis-cli /usr/bin",
  "subject.process.name": "ln",
  "subject.process.parent.id": "568",
  "subject.process.path": "/usr/bin/",
  "time": "2022-05-23T04:04:55.000Z"
}