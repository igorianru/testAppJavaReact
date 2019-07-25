package com.testapp.service;

import com.testapp.dao.HibernateTaskDAO;
import com.testapp.dao.TaskDAO;
import com.testapp.model.Task;

import java.util.List;

public class TaskServiceImpl implements TaskService {

    private TaskDAO taskDAO = new HibernateTaskDAO();

    @Override
    public List<Task> getTasks(int id) {
        return taskDAO.getTasks(id);
    }

    @Override
    public void addTask(Task task) {
        taskDAO.addTask(task);
    }

    @Override
    public void deleteTask(int id) {
        taskDAO.deleteTask(id);
    }

    @Override
    public Task getTaskById(int id) {
        return taskDAO.getTaskById(id);
    }
}
