import * as fs from 'fs'

const payload = {
  "blocks": [
    {
      "type": "header",
      "text": {
        "type": "plain_text",
        "text": "タグ付け未完了エスカレタスク一覧",
        "emoji": true
      }
    },
    {
      "type": "section",
      "text": {
        "type": "plain_text",
        "text": "以下タグ付けされていないためタグ付けをお願いします:pray:"
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "- <https://google.com|Page1>\n- <https://google.com|Page2>\n- <https://google.com|Page3>"
      }
    }
  ]
}
console.dir(payload, { depth: null})
fs.writeFileSync("payload.json", JSON.stringify(payload), { encoding: 'utf-8' })
