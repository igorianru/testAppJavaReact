package com.testapp.servlet;


import com.testapp.model.Task;
import com.testapp.service.TaskService;
import com.testapp.service.TaskServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/task/add")
public class AddTaskServlet extends HttpServlet {

    private TaskService taskService = new TaskServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("/WEB-INF/view/task-form.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Task task = new Task();

        if (request.getParameter("taskId") != null && !request.getParameter("taskId").isEmpty()) {
            task.setId(Integer.parseInt(request.getParameter("taskId")));
        }

        task.setNumber(Integer.parseInt(request.getParameter("number")));
        task.setName(request.getParameter("name"));
        task.setFrom(request.getParameter("from"));
        task.setTo(request.getParameter("to"));
        task.setDirectoriesId(Integer.parseInt(request.getParameter("directories_id")));
        taskService.addTask(task);
    }
}
