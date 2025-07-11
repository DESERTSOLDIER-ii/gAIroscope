// controllers/notificationController.js
const Notification = require('../models/Notification');

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.status(200).json({ notifications });
  } catch (err) {
    console.error('Fetch Notifications Error:', err);
    res.status(500).json({ error: 'Could not fetch notifications.' });
  }
};

exports.sendNotification = async (req, res) => {
  try {
    const { title, type, accuracy, description } = req.body;

    const notification = await Notification.create({
      title,
      type,
      accuracy,
      description,
      createdAt: new Date(),
    });

    res.status(201).json({ notification });
  } catch (err) {
    console.error('Send Notification Error:', err);
    res.status(500).json({ error: 'Could not send notification.' });
  }
};
