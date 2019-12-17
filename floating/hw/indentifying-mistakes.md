### 4. Identifying Mistakes (15 min)

The following code examples each contain a mistake. Describe the problem for each.

  <table>
  <thead>
    <tr>
      <th>Original</th>
      <th>Mistakes</th>
      <th>Problem</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>students.each do |student|<br>
&nbsp;&nbsp;puts "Welcome, #{student}"<br>
end</td>
      <td>students.each do |student|<br>
&nbsp;&nbsp;puts "Welcome, #(student)"<br>
end</td>
      <td>The problem is...</td>
    </tr>
    <tr>
      <td>.main-content { <br>
&nbsp;&nbsp;font-size: 12px;<br>
&nbsp;&nbsp;border: 3px solid black;<br>
&nbsp;&nbsp;font-family: sans-serif;<br>
}</td>
      <td>.main-content { <br>
&nbsp;&nbsp;font-size: 12px;<br>
&nbsp;&nbsp;border: 3px solid black;<br>
&nbsp;&nbsp;font-family: sans serif;<br>
}</td>
      <td>The problem is...</td>
    </tr>
    <tr>
      <td>log(2, (1022 * ((score - min(score) over ()) / ((max(score) over ()) - (min(score) over ()))) + 2)::numeric)</td>
      <td>log(2, (1022 * ((score - min(score) over ()) / ((min(score) over ()) - (min(score) over ()))) + 2)::numeric)</td>
      <td>The problem is...</td>
    </tr>
    <tr>
      <td>arr.product(arr).reject { |a,b| a == b }.any? { |a,b| a + b == n }</td>
      <td>arr.product(arr).reject { |a,b| b == b }.any? { |a,b| a + b == n }</td>
      <td>The problem is...</td>
    </tr>
    <tr>
      <td>class Cat<br>
&nbsp;&nbsp;attr_reader :color, :name<br>
&nbsp;&nbsp;def initialize(data)<br>
&nbsp;&nbsp;&nbsp;&nbsp;@name = data[:name]<br>
&nbsp;&nbsp;&nbsp;&nbsp;@color = data[:color]<br>
&nbsp;&nbsp;end<br>
end</td>
<td>class Cat<br>
&nbsp;&nbsp;attr_reader :color, :name<br>
&nbsp;&nbsp;def intialize(data)<br>
&nbsp;&nbsp;&nbsp;&nbsp;@name = data[:name]<br>
&nbsp;&nbsp;&nbsp;&nbsp;@color = data[:color]<br>
&nbsp;&nbsp;end<br>
end</td>
      <td>The problem is...</td>
    </tr>
  </tbody>
</table>
