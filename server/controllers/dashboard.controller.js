const prisma = require("../utils/prisma");

const getDashboardSummary = async (req, res) => {
  try {

    const userId = req.user.id;

    const totalTasks = await prisma.task.count({
      where: {
        userId,
      },
    });

    const completedTasks = await prisma.task.count({
      where: {
        userId,
        status: "Completed",
      },
    });

    const pendingTasks = await prisma.task.count({
      where: {
        userId,
        status: "Pending",
      },
    });

    const overdueTasks = await prisma.task.count({
      where: {
        userId,
        dueDate: {
          lt: new Date(),
        },
        status: {
          not: "Completed",
        },
      },
    });

    res.status(200).json({
      success: true,
      summary: {
        totalTasks,
        completedTasks,
        pendingTasks,
        overdueTasks,
      },
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
};

const getRecentTasks = async (req, res) => {
  try {

    const userId = req.user.id;

    const tasks = await prisma.task.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    res.status(200).json({
      success: true,
      tasks,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
};

const getProductivity = async (req, res) => {
  try {

    const userId = req.user.id;

    const totalTasks = await prisma.task.count({
      where: {
        userId,
      },
    });

    const completedTasks = await prisma.task.count({
      where: {
        userId,
        status: "Completed",
      },
    });

    let productivity = 0;

    if (totalTasks > 0) {
      productivity = Math.round(
        (completedTasks / totalTasks) * 100
      );
    }

    res.status(200).json({
      success: true,
      productivity,
      totalTasks,
      completedTasks,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
};

const getTaskStatusAnalytics = async (req, res) => {
  try {

    const userId = req.user.id;

    const completed = await prisma.task.count({
      where: {
        userId,
        status: "Completed",
      },
    });

    const pending = await prisma.task.count({
      where: {
        userId,
        status: "Pending",
      },
    });

    const overdue = await prisma.task.count({
      where: {
        userId,
        status: {
          not: "Completed",
        },
        dueDate: {
          lt: new Date(),
        },
      },
    });

    res.status(200).json({
      success: true,
      data: [
        {
          name: "Completed",
          value: completed,
        },
        {
          name: "Pending",
          value: pending,
        },
        {
          name: "Overdue",
          value: overdue,
        },
      ],
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
};

const getWeeklyAnalytics = async (req, res) => {
  try {

    const userId = req.user.id;

    const today = new Date();

    const week = [];

    for (let i = 6; i >= 0; i--) {

      const start = new Date(today);
      start.setDate(today.getDate() - i);
      start.setHours(0, 0, 0, 0);

      const end = new Date(start);
      end.setHours(23, 59, 59, 999);

      const completed = await prisma.task.count({
        where: {
          userId,
          status: "Completed",
          createdAt: {
            gte: start,
            lte: end,
          },
        },
      });

      const pending = await prisma.task.count({
        where: {
          userId,
          status: "Pending",
          createdAt: {
            gte: start,
            lte: end,
          },
        },
      });

      week.push({
        day: start.toLocaleDateString("en-US", {
          weekday: "short",
        }),
        completed,
        pending,
      });

    }

    res.status(200).json({
      success: true,
      analytics: week,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
};

const getMonthlyAnalytics = async (req, res) => {
  try {

    const userId = req.user.id;

    const months = [];

    const monthNames = [
      "Jan","Feb","Mar","Apr","May","Jun",
      "Jul","Aug","Sep","Oct","Nov","Dec"
    ];

    const currentYear = new Date().getFullYear();

    for (let i = 0; i < 12; i++) {

      const start = new Date(currentYear, i, 1);

      const end = new Date(currentYear, i + 1, 0, 23, 59, 59, 999);

      const completed = await prisma.task.count({
        where: {
          userId,
          status: "Completed",
          createdAt: {
            gte: start,
            lte: end,
          },
        },
      });

      months.push({
        month: monthNames[i],
        completed,
      });

    }

    res.status(200).json({
      success: true,
      analytics: months,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
};

module.exports = {
  getDashboardSummary,
  getRecentTasks,
  getProductivity,
  getTaskStatusAnalytics,
  getWeeklyAnalytics,
  getMonthlyAnalytics,
};