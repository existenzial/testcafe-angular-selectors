import { AngularSelector, waitForAngular } from '../lib';

fixture `AngularSelector`
    .page('http://localhost:8080/test/data/angular')
    .beforeEach(async () => {
        await waitForAngular();
    });

test('root', async t => {
    const root        = AngularSelector();
    const rootAngular = await root.getAngular();

    await t
        .expect(root.exists).ok()
        .expect(rootAngular.rootProp1).eql(1);
});

test('selector', async t => {
    const list        = AngularSelector('list');
    const listAngular = await list.getAngular();

    await t.expect(list.count).eql(2)
        .expect(AngularSelector('list-item').count).eql(6)
        .expect(listAngular.id).eql('list1');
});

test('composite selector', async t => {
    const listItem           = AngularSelector('list list-item');
    const listItemAngular6   = await listItem.nth(5).getAngular();
    const listItemAngular5Id = listItem.nth(4).getAngular(({ state }) => state.id);

    await t.expect(listItem.count).eql(6)
        .expect(listItemAngular6.id).eql('list2-item3')
        .expect(listItemAngular5Id).eql('list2-item2');
});

