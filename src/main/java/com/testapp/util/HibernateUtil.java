package com.testapp.util;

import com.testapp.model.Task;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {

    private static SessionFactory factory;

    private HibernateUtil() {
    }

    public static synchronized SessionFactory getSessionFactory() {
        if (factory == null) {
            factory = new Configuration()
                    .configure("hibernate.cfg.xml")
                    .addAnnotatedClass(Task.class)
                    .buildSessionFactory();
        }
        return factory;
    }
}