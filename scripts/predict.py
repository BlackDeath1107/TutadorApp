# scripts/predict.py
import sys
import joblib
import numpy as np

def predict_score(mock_score):
    model = joblib.load('scripts/predict_function.pkl')
    
    input_data = np.array([[float(mock_score)]])
    
    prediction = model.predict(input_data)
    
    return prediction[0]

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Error: Provide a mock score as a command-line argument")
        sys.exit(1)
        
    try:
        mock_score = float(sys.argv[1])
        result = predict_score(mock_score)
        print(result)
    except Exception as e:
        print(f"Error: {str(e)}", file=sys.stderr)
        sys.exit(1)