const mql = window.matchMedia("(max-width: 600px)");

window.onload = init;

function init() {
  cursor.style.left = "0px";
  renderBanner();
}

let comandHistory = [];
let commandIndex = 0


function processCommand(command) {

  const args = formatCommand(command);

  renderLine(BASE_ROOT + command, "no-animation", 0);

  switch (args[0]) {
    case "":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(EMPTY, 80);
      break;
    case "help":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(COMMAND_LIST, 80);
      break;
    case "about":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(ABOUT, 80);
      break;
    case "social":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(SOCIAL, 80);
      break;
    case "projects":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(PROJECTS, 80);
      break;
    case "email":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(EMAIL_INFO, 80);
      break;
    case "banner": 
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderBanner();
      break;
    case "notion":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      newTab("https://www.notion.so/Jeon-Il-Shin-454c44a1e1934957b5b27efaee6774cd");
      break;
    case "clear":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      setTimeout( () =>
      contentHook = clearTerminal(terminal, contentHook), 1)
      break;
    case "ls":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(DIRECTORIES, 80);
      break;
    case "rm":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(RM, 80);
      break;
    case "sudo":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(SUDO, 80);
      break;
    case "touch":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(TOUCH, 80);
      break;
    case "vi":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderMultipleLines(VI, 80);
      break;
    case "cat":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      if (args[1] === "github") {
        renderLine("This is my Github Page: https://github.com/jeonilshin", 80);
      } else if (args[1] === "webPortfolio") {
        renderLine("My Web Portfolio Page's Link is... https://jeonilshin.com", 80);
      } else if (args[1] === "mystery") {
        renderLine("Woops! crash loop back..", 80);
      } else {
        renderLine("Input Directory! " + args.slice(1).join(" "));
      }
      break
    case "education":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      if (mql.matches) {
        renderMultipleLines(MOBILE_EDUCATION_INFO, 80);
      } else {
        renderMultipleLines(EDUCATION_INFO, 80);
      }
      break;
    case "pwd":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      renderLine("/home/shin");
      break
    case "echo":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      const printCommands = args.slice(1).join(" ");
      renderLine(printCommands, 80);
      break;
    case "cd":
      commandIndex = addCommandToHistory(args,comandHistory, commandIndex);
      if (args[1] === "github") {
        renderLine("Redirecting to my Github Page...", 80);
        newTab("https://github.com/jeonilshin");
      } else if (args[1] === "webPortfolio") {
        renderLine("Redirecting to my Web Portfolio", 80);
        newTab("https://jeonilshin.com");
      } else if (args[1] === "videos") {
        renderLine("Opening Mystery Gift...", 80);
        newTab("https://www.youtube.com/watch?v=bgJ_1WuhUig");
      } else {
        renderLine("Directory not found: " + args.slice(1).join(" "));
      }
      break;
      case "history":
        renderMultipleLines(comandHistory, 80);
        comandHistory.pop()
        break;
    default:
      if (mql.matches) {
        renderLine("<br>Command not found");
        renderLine("type <span class=\"command\">'help'</span> for all commands<br><br>");
      } else {
        renderLine("Command not found. For a list of commands, type <span class=\"command\">'help'</span>.", "error", 100);
      }
      break;
  } 
}

textAreaInput.addEventListener("keydown", handleEnterKeyPress);
textAreaInput.addEventListener("keydown", handleArrowUpKeyPress);
textAreaInput.addEventListener("keydown", handleArrowDownKeyPress);
mobileInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    processCommand(event.target.value);
    clearInput(mobileInput);
  } 
});

function renderLine(text, style, time, asciiArt=false) {
  let formattedText = text;
  if (asciiArt) {
    formattedText = formatASCIIArt(text);
  } else {
    formattedText = formatText(text);
  }
  setTimeout(() => {
    const next = createLine(formattedText, style);
    insertLine(next, contentHook);
    scrollToBottom();
  }, time);
}

function formatASCIIArt(text) {
  const space = " ";
  const noBreakingSpace = "&nbsp";

  return text.replaceAll(space, noBreakingSpace);
}

function formatText(text) {
  const doubleSpace = "  ";
  const doubleNoBreakingSpace = "&nbsp;&nbsp";
  return text.replaceAll(doubleSpace, doubleNoBreakingSpace);
}

function createLine(text, style) {
  const line = document.createElement("p");
  line.className = style;
  line.innerHTML = `<span class="${style}">${text}</span>`;
  return line;
}

function insertLine(element, referenceElement) {
  referenceElement?.parentNode?.insertBefore(element, referenceElement);
}

function scrollToBottom() {
  window.scrollTo({
    top: document.body.offsetHeight,
    behavior: "smooth"
  });
}

function clearInput(inputElement) {
  inputElement.value = "";
}

function renderMultipleLines(lines, delay=0, style="", asciiArt=false) {
  lines.forEach((line, index) => {
    renderLine(line, style, index * delay, asciiArt);
  })

}

function renderBanner() {
    if (mql.matches) {
      renderMultipleLines(MOBILE_BANNER, 80, "", true);
      setTimeout( () => {
        renderMultipleLines(TERMINAL_INFO_MOBILE,  80, "highlightColor");
      }, 1200);
    } else {
      renderMultipleLines(BANNER, 80, "", true);
      setTimeout( () => {
        renderMultipleLines(TERMINAL_INFO,  80, "highlightColor");
      }, 1200);
    }
}

function clearTerminal(root, hook) {
  const id = hook.id
  root.innerHTML = '<a id="' + id + '"></a>';
  hook = document.getElementById(id);
  return hook;
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addCommandToHistory(commands, historyArray, currentIndex) {
  const commandString = commands.join(" ");
  historyArray.push(commandString);
  return currentIndex + 1;
}

function formatCommand(command) {
  command = command.toLowerCase();
  command = command.trim();
  return command.split(" ");
}

function handleEnterKeyPress(event) {
  if (event.key === "Enter") {
    processCommand(event.target.value);
    clearInput(textAreaInput);
  }
}

function handleArrowUpKeyPress(event) {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    if (commandIndex > 0) {
      commandIndex = commandIndex - 1;
      textAreaInput.value = comandHistory[commandIndex]
      typerElement.innerHTML = comandHistory[commandIndex];
    }
  }
}

function handleArrowDownKeyPress(event) {
  if (event.key === "ArrowDown" && commandIndex < comandHistory.length) {
    commandIndex = commandIndex + 1;
    if (comandHistory[commandIndex] === undefined) {
      textAreaInput.value = "";
      typerElement.innerHTML = "";
    }
    else {
      textAreaInput.value = comandHistory[commandIndex];
      typerElement.innerHTML = comandHistory[commandIndex];
    }
  }
}