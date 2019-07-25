package com.testapp.servlet;

import com.testapp.service.TaskService;
import com.testapp.service.TaskServiceImpl;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/task/delete")
public class DeleteTaskServlet extends HttpServlet {

    private TaskService taskService = new TaskServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String id = request.getParameter("taskId");
        taskService.deleteTask(Integer.parseInt(id));
    }
}
