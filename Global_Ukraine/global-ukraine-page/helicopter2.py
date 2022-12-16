import numpy as np


def point_in_pentagon(point, vertices):
    """створення масиву NumPy вершин"""
    vertices = np.array(vertices)

    """обчислення центра п'ятикутника"""
    center = np.mean(vertices, axis=0)

    """обчислення кутів між точкою та кожною парою вершин"""
    angles = np.arctan2(vertices[:, 1] - center[1], vertices[:, 0] -
                        center[0]) - np.arctan2(point[1] - center[1], point[0] - center[0])

    """кути обертання до [-pi, pi]"""
    angles = np.mod(angles + np.pi, 2 * np.pi) - np.pi

    """повертає True, якщо точка знаходиться всередині п'ятикутника, False в іншому випадку"""
    return np.abs(np.sum(angles)) <= np.pi


if __name__ == "__main__":
    vertices = [(-1, -2), (3, 3), (0, -4), (-1, 2), (3, -1)]
    points = [(-1, 0), (1, 4), (1, 2), (2, -3), (0, 1), (0, 0)]
    for point in points:
        if point_in_pentagon(point, vertices):
            print(f"{point} знаходиться в межах п'ятикутника")
        else:
            print(f"{point} не знаходиться в межах п'ятикутника")
