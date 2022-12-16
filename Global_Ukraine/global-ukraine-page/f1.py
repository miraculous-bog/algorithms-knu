import numpy as np

def point_in_convex_polygon(point, vertices):
  angles = []
  for i in range(len(vertices)):
    """Отримання поточної вершини та наступної вершини (обтікання
       навколо першої вершини, якщо необхідно)"""
    current_vertex = vertices[i]
    next_vertex = vertices[(i + 1) % len(vertices)]

    """Обчислення кута між точкою та вершиною
       і потім наступною вершиною"""
    angle = np.arctan2(
      point[1] - current_vertex[1],
      point[0] - current_vertex[0]
    ) - np.arctan2(
      point[1] - next_vertex[1],
      point[0] - next_vertex[0]
    )

    """Перевірка, чи є кут між -пі та пі"""
    if angle > np.pi:
      angle -= 2 * np.pi
    elif angle < -np.pi:
      angle += 2 * np.pi

    """Додавання кута в список"""
    angles.append(angle)

  """Sum кути та перевіряю, чи дорівнюють вони 2*пі"""
  return sum(angles) == 2 * np.pi




if __name__ == "__main__":
    vertices = [(-1, -2), (3, 3), (0, -4), (-1, 2), (3, -1)]
    points = [(-1, 0), (1, 4), (1, 2), (2, -3), (0, 1), (0, 0)]
    for point in points:
        if point_in_convex_polygon(point, vertices):
            print(f"{point} is within the сonvex pentagon")
        else:
            print(f"{point} is not within the convex pentagon")