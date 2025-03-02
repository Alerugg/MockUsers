"""empty message

Revision ID: d1cc89a55d63
Revises: a7b566b37bbb
Create Date: 2025-01-11 18:05:40.311160

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd1cc89a55d63'
down_revision = 'a7b566b37bbb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('last_name', sa.String(length=80), nullable=False),
    sa.Column('street', sa.String(length=80), nullable=False),
    sa.Column('city', sa.String(length=80), nullable=False),
    sa.Column('country', sa.String(length=80), nullable=False),
    sa.Column('phone', sa.String(length=20), nullable=False),
    sa.Column('identification', sa.String(length=80), nullable=False),
    sa.Column('birthday', sa.Date(), nullable=False),
    sa.Column('birth_country', sa.String(length=80), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    # ### end Alembic commands ###
