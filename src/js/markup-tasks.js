export default function markupItem({ title, description, id }) {
  return `
    <li class="task-list-item" data-id="${id}">
        <button class="task-list-item-btn">Delete</button>
        <h3>${title}</h3>
        <p>${description}</p>
    </li>
    `;
}
