function startTask() {
    const task = document.getElementById("taskInput").value.trim();
    if (task === "") {
      alert("من فضلك اكتب المهمة أولاً");
      return;
    }
  
    document.getElementById("currentTask").innerText = task;
    document.getElementById("taskSection").style.display = "none";
    document.getElementById("timerSection").style.display = "block";
  
    // إعادة ضبط المؤقت
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateTimerDisplay();
  
    // تشغيل المؤقت
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
      } else {
        clearInterval(timer);
        streak = 0;
        alert("انتهى الوقت! حاول مرة أخرى");
        resetView();
      }
    }, 1000);
  }
