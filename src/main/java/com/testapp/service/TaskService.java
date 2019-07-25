package com.testapp.service;

import com.testapp.model.Task;

import java.util.List;

public interface TaskService {
    List<Task> getTasks(int id);
    void addTask(Task task);
    void deleteTask(int id);
    Task getTaskById(int id);
}
