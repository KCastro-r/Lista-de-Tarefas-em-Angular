import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarefa {
  descricao: string;
  concluida: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Guarda o texto digitado no input
  novaTarefaTexto: string = '';

  // Lista inicial de tarefas exigida no enunciado
  tarefas: Tarefa[] = [
    { descricao: 'Estudar Angular', concluida: false },
    { descricao: 'Fazer exercício de programação', concluida: true },
    { descricao: 'Revisar conteúdo da aula', concluida: false }
  ];

  // Adiciona nova tarefa se o campo não estiver vazio
  adicionarTarefa(): void {
    if (this.novaTarefaTexto.trim() !== '') {
      this.tarefas.push({
        descricao: this.novaTarefaTexto.trim(),
        concluida: false
      });
      this.novaTarefaTexto = ''; // Limpa o campo de texto
    }
  }

  // Remove uma tarefa pelo seu índice na lista
  removerTarefa(index: number): void {
    this.tarefas.splice(index, 1);
  }

  // Calcula a quantidade de tarefas concluídas em tempo real
  totalConcluidas(): number {
    return this.tarefas.filter(t => t.concluida).length;
  }
}