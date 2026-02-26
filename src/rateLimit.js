const STORAGE_KEY = "api_calls";
const DAILY_LIMIT = 10;

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getCallCount() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data && data.date === getTodayKey()) return data.count;
  } catch {}
  return 0;
}

export function canMakeApiCall() {
  return getCallCount() < DAILY_LIMIT;
}

export function recordApiCall() {
  const today = getTodayKey();
  const count = getCallCount();
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: today, count: count + 1 }));
}

export function getRemainingCalls() {
  return Math.max(0, DAILY_LIMIT - getCallCount());
}
