async function saveNote() {
    const content = document.getElementById("noteContent").value;

    const response = await fetch("/note", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content })
    });

    const result = await response.json();

    // 알림창 + 화면에 노트 ID 표시
    alert(`노트 저장 완료! ID: ${result.id}`);
    document.getElementById("saveResult").innerText = `노트 ID: ${result.id}`;
}

async function getNote() {
    const id = document.getElementById("noteId").value;

    const response = await fetch(`/note/${id}`);
    const resultDiv = document.getElementById("noteResult");

    if (!response.ok) {
        resultDiv.innerText = "노트를 찾을 수 없습니다.";
        return;
    }

    const result = await response.json();
    resultDiv.innerText = "내용: " + result.content;
}

async function deleteNote() {
    const id = document.getElementById("deleteId").value;

    const response = await fetch(`/note/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        alert("노트 삭제 완료!");
    } else {
        alert("삭제 실패!");
    }
}
