package com.testapp.dao;

import com.testapp.model.Task;

import java.util.List;

public interface TaskDAO {
    List<Task> getTasks(int id);

    void addTask(Task task);

    void deleteTask(int id);

    Task getTaskById(int id);
}
