import lib
import argparse

parser = argparse.ArgumentParser(description='Module for x to the power of n')
parser.add_argument('base', metavar='X', type=int, help='base')
parser.add_argument('expoent', metavar='N', type=int, help='expoent')
args = parser.parse_args()

print(lib.power(args.base,args.expoent))