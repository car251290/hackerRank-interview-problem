def solution(buckets):
   
    ball_positions = [i for i, c in enumerate(buckets) if c == 'B']
    total_balls = len(ball_positions)

    # Helper function to calculate the cost of aligning balls to a valid alternating pattern
    def get_cost(start_index):
        # Generate target positions for the balls
        target_positions = [start_index + 2 * i for i in range(total_balls)]
        # If the last target position is out of bounds, return infinity
        if target_positions[-1] >= len(buckets):
            return float('inf')
      
        return sum(abs(ball_positions[i] - target_positions[i]) for i in range(total_balls))

  
    cost_0 = get_cost(0)
    cost_1 = get_cost(1)

    # Calculate the minimum cost
    result = min(cost_0, cost_1)

    # If no valid arrangement is possible, return -1
    return result if result != float('inf') else -1