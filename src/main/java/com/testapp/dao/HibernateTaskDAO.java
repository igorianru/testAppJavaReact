package com.testapp.dao;

import com.testapp.model.Task;
import com.testapp.util.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.query.Query;

import java.util.List;

public class HibernateTaskDAO implements TaskDAO {

    @Override
    public List<Task> getTasks(int directoriesId) {
        Session currentSession = HibernateUtil.getSessionFactory().getCurrentSession();
        currentSession.beginTransaction();
        Query<Task> query;


        if(directoriesId > 0) {
            query = currentSession.createQuery("from Task where directories_id=:directoriesId order by number", Task.class);
            query.setParameter("directoriesId", directoriesId);
        } else
            query = currentSession.createQuery("from Task order by number", Task.class);

        List<Task> tasks = query.getResultList();
        currentSession.getTransaction().commit();
        return tasks;
    }

    @Override
    public void addTask(Task task) {
        Session currentSession = HibernateUtil.getSessionFactory().getCurrentSession();
        currentSession.beginTransaction();
        System.out.println(task);
        currentSession.saveOrUpdate(task);
        currentSession.getTransaction().commit();
    }

    @Override
    public void deleteTask(int id) {
        Session currentSession = HibernateUtil.getSessionFactory().getCurrentSession();
        currentSession.beginTransaction();
        Query query = currentSession.createQuery("delete from Task where id=:taskId");
        query.setParameter("taskId", id);
        query.executeUpdate();
        currentSession.getTransaction().commit();
    }

    @Override
    public Task getTaskById(int id) {
        Session currentSession = HibernateUtil.getSessionFactory().getCurrentSession();
        currentSession.beginTransaction();
        Task task = currentSession.get(Task.class, id);
        currentSession.getTransaction().commit();
        return task;
    }
}
