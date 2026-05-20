const rules = [
  {
    emoji: "🏆",
    title: "VTV – Vortagesvollster",
    body: "Der Vortagesvollste (VTV) erhält beim Frühstück ein ehrenvolles Accessoire, das ihn für seine besonderen Verdienste sichtbar auszeichnet und das während des gesamten Tages ununterbrochen zu tragen oder mit sich zu führen ist. Beim Frühstück des darauffolgenden Tages ist dieses Accessoire ordnungsgemäß und vollständig wieder mitzubringen, woraufhin es feierlich in den privaten Besitz des jeweiligen VTV übergeht. Sollte der VTV seiner Verantwortung nicht nachkommen und das Accessoire nicht vorzeigen können, obliegt es der Gruppe, gemeinschaftlich zu bestimmen, welches Getränk der VTV unverzüglich zu konsumieren hat.",
  },
  {
    emoji: "👑",
    title: "VTV-Privilegien",
    body: 'VTV zu sein ist keine Strafe, sondern eine Ehrenauszeichnung für besonderen Einsatz im Dienste der Gruppe und wird daher mit Privilegien ausgestattet: Er darf jeweils 2x pro Tag eine „Exen!"-Runde ausrufen, bei der alle ihr aktuelles Getränk leeren müssen, oder eine „Bestellrunde!" bestimmen, bei der er festlegt, welches Getränk als Nächstes für alle bestellt wird.',
  },
  {
    emoji: "📵",
    title: "Handypause",
    body: "Zur Stärkung der Gemeinschaft und mit dem Ziel, während der Reise mehr miteinander als übereinander zu sprechen, können die Planer in Abstimmung mit dem Präsidium bis zu zweimal täglich eine 30-minütige Handypause ausrufen. Während dieser Zeit werden alle Handys entweder umgedreht in die Mitte des Tisches gelegt oder gesammelt in einem gemeinsamen Beutel verwahrt; ihre Nutzung ist ausschließlich für Tickets, Navigation oder echte Notfälle gestattet.",
  },
  {
    emoji: "⏰",
    title: "Pünktlichkeit beim Frühstück",
    body: "Wer am Freitag oder Samstag nicht pünktlich zum angesetzten Frühstück gemäß Zeitplan erscheint, erhält von der Gruppe ein Begrüßungsgetränk, das gemeinschaftlich ausgewählt und unverzüglich nach Ankunft vollständig auszutrinken ist. Die Regel dient als sanfte Erinnerung daran, dass Pünktlichkeit nicht nur den Ablauf erleichtert, sondern auch ein Zeichen des Respekts gegenüber der gemeinsamen Planung ist.",
  },
  {
    emoji: "🤳",
    title: "Selfie-Pflicht",
    body: "Beim ersten Getränk in jeder neuen Location ist jede Person verpflichtet, ein Selfie in die WhatsApp-Gruppe der Fahrt zu posten. Gilt zum Zeitpunkt des ersten Getränks eine ausgerufene Handypause, ist die Dokumentation unmittelbar nach deren Ablauf nachzuholen. Wird die Pflicht nicht erfüllt, darf die Person, die das Versäumnis zuerst bemerkt, das nächste zu konsumierende Getränk verbindlich festlegen.",
  },
  {
    emoji: "🫡",
    title: "Teilnahme am Programm",
    body: "Selbstverständlich halten sich alle Teilnehmenden an den festgelegten Zeitplan, nehmen pünktlich und mit der gebotenen Freude an sämtlichen Programmpunkten teil und verlassen weder einzelne Aktivitäten noch die Gruppe vorzeitig. Einer gesonderten Sanktion bedarf es daher nicht – wer sich dennoch dem gemeinsamen Ablauf entzieht, verpasst nicht nur einen erheblichen Teil des kollektiven Vergnügens, sondern muss darüber hinaus mit der spürbaren Missbilligung und vorübergehenden gesellschaftlichen Verachtung durch die restliche Gruppe rechnen.",
  },
];

export default function RulesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Regeln</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {rules.length} Regeln · Unwissenheit schützt vor Strafe nicht
        </p>
      </div>

      <div className="space-y-4">
        {rules.map((rule, i) => (
          <div key={i} className="card">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl leading-none">{rule.emoji}</span>
              <p className="font-bold text-gray-900 dark:text-white">{rule.title}</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{rule.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
