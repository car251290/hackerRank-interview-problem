import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(10, 6))

# Central function
ax.text(0.5, 0.5, "Azure Function",
        ha='center', va='center',
        fontsize=14, bbox=dict(boxstyle="round", fill=True))

triggers = {
    "HTTP Trigger": (0.1, 0.8),
    "Timer Trigger": (0.5, 0.9),
    "Blob Trigger": (0.9, 0.8),
    "Queue Trigger": (0.1, 0.2),
    "Database Trigger": (0.5, 0.1),
    "IoT Trigger": (0.9, 0.2),
}

# Draw triggers
for name, (x, y) in triggers.items():
    ax.text(x, y, name,
            ha='center', va='center',
            fontsize=10,
            bbox=dict(boxstyle="round", fill=True))
    ax.annotate("", xy=(0.5, 0.5), xytext=(x, y),
                arrowprops=dict(arrowstyle="->"))

ax.set_axis_off()
plt.title("Azure Function Triggers")
plt.show()
fig.savefig("azure_function_triggers.png", bbox_inches='tight')