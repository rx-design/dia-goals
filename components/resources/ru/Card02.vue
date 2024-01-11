<template>
  <Card
    class="min-h-full"
    :pt="{
      title: 'text-base',
      subtitle: 'text-xs',
      content: 'text-sm',
    }"
    :pt-options="{
      mergeProps: true,
    }"
  >
    <template #title>
      What to Eat When You Have T1D
    </template>
    <template #subtitle>
      Written by Mary Jo DiLonardo
      <br>
      Medically reviewed by Michael Dansinger, MD
    </template>
    <template #content>
      <div>
        <p>
          It's important to eat a healthy diet when you have type 1 diabetes. That doesn't mean you can't enjoy tasty food, including some of your favorites.
        </p>
        <br>
        <p class="font-semibold">
          Why Diet Matters
        </p>
        <p>
          With type 1 diabetes, your body stops making insulin. So you take insulin every day either through shots or a pump. It’s also key to track your blood sugar levels.
          <br>
          Insulin is only part of the picture. Diet and exercise also play important roles in helping keep your blood sugar levels stable. When you make healthy food choices and eat consistent amounts throughout the day, it can help control your sugars. It can also lower your chance of diabetes-related problems like heart disease, kidney disease, and nerve damage.
        </p>
        <br>
        <p class="font-semibold">
          What to Eat
        </p>
        <p>
          Some experts used to think there was a "diabetes diet." They thought people with diabetes had to avoid all foods with sugars or stop eating certain other foods. But when you have type 1, you can eat the same healthy diet as everyone else.
          <br>
          Follow some general guidelines:
        </p>
        <ul class="list-disc list-inside">
          <li>Eat less unhealthy fat. Cut back on the saturated fats you find in high-fat meats like bacon and regular ground beef, as well as full-fat dairy like whole milk and butter. Unhealthy fats raise your chance of heart disease. With diabetes, you face higher-than-average odds of getting heart disease. Make smart food choices to lower that risk.</li>
          <li>Get enough fiber. It may help control your blood sugar. You can get fiber from whole grains, beans, and fruits and vegetables. Try to get 25-30 grams a day.</li>
        </ul>
        <p>
          Those high-fiber foods are always better choices than low-fiber carbs such as refined 'white' grains and processed sugary foods.
        </p>
        <br>
        <p class="font-semibold">
          Counting Carbs
        </p>
        <p>
          Carbohydrates are your body's main source of energy. You get them from many foods, like grains (pasta, bread, crackers, and cookies), fruits and vegetables, dairy products, and sugars.
          <br>
          Carbs raise your blood sugar levels faster than any food. How many and what type of carbohydrate foods you eat can affect how well you manage your diabetes.
          <br>
          Counting carbs helps you keep track of how many carbs you eat. You can work with your doctor or a dietitian to figure out how many grams of carbs you should eat for each meal and snack. You can use the food label, a food exchange app, or other reference to count up the grams of carbs in foods.
        </p>
        <br>
        <p class="font-semibold">
          Sugar and Sugar Substitutes
        </p>
        <p>
          Some people think sugar "causes" diabetes. But type 1 is caused by genetics and other factors. Still, many sweet foods have a lot of carbs, and that can affect your blood sugar.
          <br>
          If a food is "sugar free," that doesn't mean it also has fewer carbs or calories. Read the label so you can count how many carbs you're getting. You may want to consider foods and drinks that use low-calorie or artificial sweeteners. They can satisfy your sweet tooth without the extra carbs and calories.
        </p>
        <br>
        <p class="font-semibold">
          Diabetes 'Superfoods'
        </p>
        <p>
          The American Diabetes Association suggests you eat these tasty items. They're low in carbs (also known as low glycemic index foods). And they're high in key nutrients like calcium, potassium, fiber, magnesium, and other vitamins.
        </p>
        <ul class="list-disc list-inside">
          <li>Beans</li>
          <li>Dark green leafy vegetables</li>
          <li>Citrus fruit</li>
          <li>Sweet potatoes</li>
          <li>Berries</li>
          <li>Tomatoes</li>
          <li>Fish high in omega-3 fatty acids (like salmon)</li>
          <li>Whole grains</li>
          <li>Nuts</li>
          <li>Fat-free yogurt and milk</li>
        </ul>
        <br>
        <p class="text-right">
          Source: WebMD
        </p>
      </div>
    </template>
    <template #footer>
      <slot />
    </template>
  </Card>
</template>
