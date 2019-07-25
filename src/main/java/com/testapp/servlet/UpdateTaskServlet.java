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


@WebServlet("/task/update")
public class UpdateTaskServlet extends HttpServlet {

    public TaskService taskService = new TaskServiceImpl();

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("taskId");
        Task task = taskService.getTaskById(Integer.parseInt(id));

        Util.printJson(task, response);
    }

//    @Override
//    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        super.doPost(request, response);
//        String id = request.getParameter("taskId");
//        Task task = taskService.getTaskById(Integer.parseInt(id));
//
//        Util.printJson(task, response);
//    }
}
