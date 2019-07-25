package com.testapp.servlet;

import com.testapp.model.Task;
import com.testapp.service.TaskService;
import com.testapp.service.TaskServiceImpl;
import com.testapp.util.Util;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/task/list")
public class TaskListServlet extends HttpServlet {

    private TaskService taskService = new TaskServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String directoriesId = request.getParameter("directoriesId") != null
                ? request.getParameter("directoriesId")
                : "0";

        List<Task> tasks = taskService.getTasks(Integer.parseInt(directoriesId));
        Util.printJson(tasks, response);
    }
}
