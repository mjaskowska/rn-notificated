    <Button
        label="Emit info"
        variant="info"
        onPress={() =>
          notify('info', {
            params: {title: 'Hello!', description: 'Some text goes here'},
          })
        }
      />
      <Button
        label="Emit error"
        variant="error"
        onPress={() =>
          notify('error', {
            params: {title: 'Hello!', description: 'Some text goes here'},
          })
        }
      />
      <Button
        label="Emit warning"
        variant="warning"
        onPress={() =>
          notify('warning', {
            params: {title: 'Hello!', description: 'Some text goes here'},
          })
        }
      />