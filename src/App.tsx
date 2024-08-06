import "./styles.css";

export default function App() {
  const handleClick = () => {
    void (async () => {
      if (navigator.share) {
        // Web share API
        await navigator.share({
          title: "タイトルが出力される",
          text: "テキストが出力される",
          url: "https://codesandbox.io/s/tender-noyce-px6srt?file=/src/App.tsx",
        });
      } else {
        // Web Share APIが使えないブラウザの処理
        await navigator.clipboard.writeText(
          "https://codesandbox.io/s/tender-noyce-px6srt?file=/src/App.tsx" as string
        );
        alert("URLをコピーしました");
      }
    });
  };

  return (
    <div>
      <button
        className="sp_sns_share_another --primary --sp"
        onClick={handleClick}
      >
        シェアボタン
      </button>
    </div>
  );
}
